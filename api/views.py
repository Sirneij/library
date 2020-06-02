from rest_framework import generics
from books.models import Books
from . import serializers

class BooksListAPIView(generics.ListAPIView):
    queryset = Books.objects.all()
    serializer_class = serializers.BookListSerializer
