from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('sign-in/', auth_views.LoginView.as_view(), name='sign_in'),
    path('sign-up/', views.RegisterView.as_view(), name='sign_up')
]

