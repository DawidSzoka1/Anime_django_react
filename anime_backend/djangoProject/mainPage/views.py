from django.contrib.sites import requests
from django.views import View
from rest_framework.views import APIView
import requests
from rest_framework.response import Response
from django.http import JsonResponse
from .models import Anime
import json


# Create your views here.

class MainPageView(View):
    def get(self, request):
        api_url = 'https://api.jikan.moe/v4/anime?anime_search_query_status=airing/'
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

        # names = [anime['title'] for anime in json_data['data']]
        # names = [anime['aired']['from'] for anime in json_data['data']]
        # names = [anime['aired']['to'] for anime in json_data['data']]
        # names = [anime['synopsis'] for anime in json_data['data']]

        return JsonResponse({'test': f"{json_data}"}, safe=False)


class AnimeApiTest(View):
    def get(self, request):
        api_url = 'https://api.jikan.moe/v4/anime'

        try:
            response = requests.get(api_url)
            if response.status_code == 200:
                return JsonResponse(response.json(), safe=False)
            else:
                return JsonResponse({'error': 'Nie udało się pobrać danych z API'}, status=500)
        except requests.RequestException as e:
            return JsonResponse({'error': 'Wystąpił błąd podczas wysyłania zapytania do API'}, status=500)
