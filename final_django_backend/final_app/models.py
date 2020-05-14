from django.db import models


class FinalProjectModel(models.Model):
    name = models.CharField(max_length=64)	 
    likes_China = models.BooleanField()
    likes_USA = models.BooleanField()
