from rest_framework.views import APIView
from rest_framework.response import Response
from .models import React
from .serializer import AnimeSerializer


# Create your views here.

class MainPageView(APIView):
    def get(self, request):
        output = [{'title': output.title, 'test': output.test}
                  for output in React.objects.all()]
        return Response(output)

    def post(self, request):
        serializer = AnimeSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

