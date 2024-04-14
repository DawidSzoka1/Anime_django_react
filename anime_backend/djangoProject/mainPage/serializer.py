from rest_framework import serializers
from .models import *


class AnimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['title', 'test']
