from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response




# Create your views here.


class MainPageView(APIView):
    def get(self, request):
        return render(request, '../../../frontendReact/public/index.html')
