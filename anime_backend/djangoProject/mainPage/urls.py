from django.urls import path
from . import views

urlpatterns = [
    path('', views.MainPageView.as_view(), name='index'),
    path('testAnime/', views.AnimeApiTest.as_view(), name='testAnime')
]

