from django.contrib.sites import requests
from django.views import View
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
import requests
from rest_framework.response import Response
from django.http import JsonResponse
from .models import Anime
import json


def get_anime():
    api_url = 'https://api.jikan.moe/v4/anime/?per_page=100'
    json_data = 0
    try:
        response = requests.get(api_url)
        if response.status_code == 200:
            json_data = response.json()
    except requests.RequestException:
        pass
    # for anime in json_data['data']:
    #     if not Anime.objects.filter(name=anime['title']).exists():
    #         Anime.objects.create(
    #             name=anime['title'],
    #             description=anime['synopsis'],
    #             img=anime['images']['jpg']['image_url'],
    #             trailer=anime['trailer']['url'],
    #             status=anime['airing'],
    #             aired=anime['aired']['string'],
    #             duration=anime['duration'],
    #             episodes=anime['episodes'],
    #             redirect=anime['url'],
    #             broadcast=anime['broadcast']['string'],
    #             rank=anime['rank'],
    #             rating=anime['rating'],
    #             studio_name=anime['studios'][0]['name'],
    #             type=anime['type']
    #
    #         )


# Create your views here.

class MainPageView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        data = [
            {'name': anime.name,
             'description': anime.description,
             'img': anime.img,
             'trailer': anime.trailer,

             }
            for anime in Anime.objects.all()
        ]
        return JsonResponse(data, safe=False)

