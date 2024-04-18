from rest_framework import status, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import RegisterSerializer


class RegisterView(generics.CreateAPIView):
    serializer_class = User
    queryset = User.objects.all()
    permission_classes = [AllowAny]




# class LoginView(APIView):
#     def get(self, request):
#         pass
#
#     def post(self, request):
#         pass
