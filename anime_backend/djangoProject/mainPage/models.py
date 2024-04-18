from django.db import models


# Create your models here.
class Anime(models.Model):
    name = models.CharField(max_length=256, default='Anime Title')
    description = models.TextField(default=None, null=True)
    img = models.URLField(default=None, null=True)
    trailer = models.URLField(default=None, null=True)
    status = models.BooleanField(default=False)
    aired = models.CharField(max_length=128, null=True)
    duration = models.CharField(max_length=128, default=None, null=True)
    episodes = models.IntegerField(default=12, null=True)
    redirect = models.URLField(default=None, null=True)
    broadcast = models.CharField(max_length=256, default=None, null=True)
    rank = models.IntegerField(default=None, null=True)
    rating = models.CharField(max_length=100, default='0')
    studio_name = models.CharField(max_length=50, default='unknown')
    type = models.CharField(max_length=30, default='tv')

    def __str__(self):
        return self.name
