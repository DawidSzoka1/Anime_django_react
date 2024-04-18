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
        api_url = 'https://api.jikan.moe/v4/anime'
        json_data = 0
        try:
            response = requests.get(api_url)
            if response.status_code == 200:
                json_data = response.json()
        except requests.RequestException:
            pass
        # for anime in json_data['data']:
        #     if anime not in Anime.objects.all():
        #         Anime.objects.create(anime_data=anime)
        # for anime in json_data:
        #     json_data = anime
        names = [anime['title'] for anime in json_data['data']]

        return JsonResponse({'test': f"{names}"}, safe=False)




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
