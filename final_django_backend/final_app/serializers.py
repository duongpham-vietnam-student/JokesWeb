from rest_framework import serializers

from final_app.models import *


class FinalProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinalProjectModel
        fields = ('name', 'likes_China', 'likes_USA',)
