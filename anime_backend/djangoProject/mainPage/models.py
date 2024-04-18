from django.db import models


# Create your models here.
class Anime(models.Model):
    name = models.CharField(max_length=256, default='Anime Title')
    description = models.TextField(default=None, null=True)
    img = models.ImageField(default=None)
    trailer = models.URLField(default=None, null=True)
    status = models.BooleanField(default=False)
    aired_from = models.DateTimeField(auto_now_add=True, null=True)
    aired_to = models.DateTimeField(null=True)
    duration = models.CharField(max_length=128, default=None, null=True)
    episodes = models.IntegerField(default=12, null=True)
    redirect = models.URLField(default=None, null=True)
    broadcast = models.CharField(max_length=256, default=None, null=True)
    rank = models.IntegerField(default=None, null=True)

    def __str__(self):
        return self.name
