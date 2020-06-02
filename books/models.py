from django.db import models

# Create your models here.

class Books(models.Model):
    title = models.CharField(max_length=2000)
    slug = models.SlugField(max_length=4000)
    subtitle = models.CharField(max_length=2000)
    author = models.CharField(max_length=2000)
    ISBN = models.CharField(max_length=13)
    class Meta:
            ordering = ('title',)
            verbose_name='Books'
            verbose_name_plural = 'Books'
    

    def __str__(self):
        return self.title
