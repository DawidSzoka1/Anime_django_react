# Generated by Django 5.0.4 on 2024-04-14 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainPage', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='react',
            name='test',
            field=models.CharField(default='test', max_length=50),
        ),
    ]
