from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User
from rest_framework.permissions import AllowAny
from .serializers import RegisterSerializer


class RegisterView(APIView):
    serializer_class = RegisterSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data.get('email')
            password = serializer.validated_data.get('password')
            User.objects.create_user(email=email, password=password)

        Response(serializer.data, status=status.HTTP_201_CREATED)



# class LoginView(APIView):
#     def get(self, request):
#         pass
#
#     def post(self, request):
#         pass
