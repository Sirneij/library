from rest_framework import serializers
from books.models import Books

class BookListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Books
        fields = ('title', 'subtitle', 'author', 'ISBN',)
