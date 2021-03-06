from django.shortcuts import render
from .models import Post
from .serializers import PostSerializer
from rest_framework import generics


# Create your views here.
class ListPost(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
