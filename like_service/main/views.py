import json

from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from .models import Like






def index(request):
    return render(request, 'main/index.html')

def card(request):
    return render(request, 'main/card.html')

def login(request):
    return render(request, 'main/login.html')

@csrf_exempt
def toggle_like(request):
    # только для POST запросов
    if request.method == "POST":
        data = json.loads(request.body)

        post_id = data.get("post_id")
        value = data.get("value")

        #если у пользователя нет сессии создаем ее
        if not request.session.session_key:
            request.session.create()

        session_key = request.session.session_key

        # есть ли лайк от этого пользователя
        like, created = Like.objects.get_or_create(
            post_id=post_id,
            session_key=session_key,
            defaults={'value': value}
        )

        if not created:
            if like.value == value:
                like.delete()
            else:
                like.value = value
                like.save()

        likes_count = Like.objects.filter(post_id=post_id, value=1).count()
        dislikes_count = Like.objects.filter(post_id=post_id, value=-1).count()

        return JsonResponse({
            "likes": likes_count,
            "dislikes": dislikes_count
        })

#требуется для обновления данных у других пользователей
def get_likes(request, post_id):
    likes_count = Like.objects.filter(post_id=post_id, value=1).count()
    dislikes_count = Like.objects.filter(post_id=post_id, value=-1).count()

    return JsonResponse({
        "likes": likes_count,
        "dislikes": dislikes_count
    })