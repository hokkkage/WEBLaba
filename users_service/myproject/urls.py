from django.contrib import admin
from django.urls import path
from main import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path('login/', views.login, name='login'),
    path('card/', views.card),
    path('register/', views.register_user),
]
