from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import React
from .serializer import AnimeSerializer


# Create your views here.

class MainPageView(APIView):
    def get(self, request):
        output = [{'title': output.title}
                  for output in React.objects.all()]
        return Response(output)

    def post(self, request):
        serializer = AnimeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

