from accounts.models import User
from rest_framework import serializers


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password']
