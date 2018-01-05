from django.db import models
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles
from django.utils import timezone

LEXERS = [item for item in get_all_lexers() if item[1]]
LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
STYLE_CHOICES = sorted((item, item) for item in get_all_styles())

class Category(models.Model):
    name = models.CharField('Category name', max_length=100)
    #slug = models.SlugField('Odnośnik', unique=True, max_length=100)
    icon = models.ImageField('Category icon', upload_to='icons',
                              blank=True)
    created = models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __unicode__(self):
        return self.name


class Posts(models.Model):
    title = models.CharField('Title', max_length=255)
    #slug = models.SlugField('Odnośnik', max_length=255, unique=True)
    text = models.TextField(verbose_name='Description')
    categories = models.ManyToManyField(Category, verbose_name='Categories')
    posted_date = models.DateTimeField('Add date', default=timezone.now)
    author = models.TextField("Author", max_length=255)

    class Meta:
        verbose_name = "Post"
        verbose_name_plural = "Posts"

    def __unicode__(self):
        return self.title

class Comments(models.Model):
    description = models.CharField("Description", max_length=255)
    author = models.TextField("Author")
    posted_date = models.DateTimeField('Add date', default=timezone.now)
    post = models.ForeignKey(Posts, related_name='comments', on_delete=models.CASCADE)
    #news = models.ForeignKey(to=News, related_name='member', on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Comment"
        verbose_name_plural = "Comments"
    
    def __unicode__(self):
        return self.description
    