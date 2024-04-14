from django.db import models


# Create your models here.
class React(models.Model):
    title = models.CharField(max_length=30)
    test = models.CharField(max_length=50, default="test")

