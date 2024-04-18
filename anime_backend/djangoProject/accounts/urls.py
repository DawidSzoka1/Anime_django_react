from django.urls import path, include
from . import views
from django.contrib.auth import views as auth_views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('sign-in/', auth_views.LoginView.as_view(), name='sign_in'),
    path('sign-up/', views.RegisterView.as_view(), name='sign_up'),
    path('token/', TokenObtainPairView.as_view(), name='get_token'),
    path('token/refresh/', TokenRefreshView.as_view(), name='refresh_token'),
    path('auth/', include('rest_framework.urls')),
]

