from rest_framework import generics
from rest_framework.response import Response
from models import User
from rest_framework.permissions import AllowAny
from serializers import RegisterSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

# class LoginView(APIView):
#     def get(self, request):
#         pass
#
#     def post(self, request):
#         pass
