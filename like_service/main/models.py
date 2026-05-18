
from django.db import models

class Like(models.Model):
    post_id = models.IntegerField()
    session_key = models.CharField(max_length=100)
    value = models.IntegerField()
    class Meta:
        unique_together = (('post_id', 'session_key'),)

