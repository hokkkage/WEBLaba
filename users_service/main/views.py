import json

from django.contrib.auth.models import User
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from .models import Profile


@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        first_name = data.get('name')
        last_name = data.get('surname','')
        email = data.get('email')
        birth_date = data.get('birth_date') or None
        password = data.get('password')

        user = User.objects.create_user(username=email,first_name= first_name, last_name=last_name, email=email, password=password)
        Profile.objects.create(
            user=user,
            first_name=first_name,
            last_name=last_name,
            birth_date=birth_date,
            email=email
        )

        return JsonResponse({'status': 'ok'})
    return JsonResponse({'status': 'error'})




def index(request):
    return render(request, 'main/index.html')

def card(request):
    return render(request, 'main/card.html')

def login(request):
    return render(request, 'main/login.html')
