from django.db import models
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles
from django.utils import timezone

LEXERS = [item for item in get_all_lexers() if item[1]]
LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
STYLE_CHOICES = sorted((item, item) for item in get_all_styles())

class Category(models.Model):
    name = models.CharField('Nazwa Kategorii', max_length=100)
    #slug = models.SlugField('Odnośnik', unique=True, max_length=100)
    icon = models.ImageField('Ikonka Kategorii', upload_to='icons',
                              blank=True)
    created = models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name = "Kategoria"
        verbose_name_plural = "Kategorie"

    def __unicode__(self):
        return self.name


class News(models.Model):
    title = models.CharField('Tytuł', max_length=255)
    #slug = models.SlugField('Odnośnik', max_length=255, unique=True)
    text = models.TextField(verbose_name='Treść')
    categories = models.ManyToManyField(Category, verbose_name='Kategorie')
    posted_date = models.DateTimeField('Data dodania', default=timezone.now)
    author = models.TextField("Autor", max_length=255)

    class Meta:
        verbose_name = "Wiadomość"
        verbose_name_plural = "Wiadomości"

    def __unicode__(self):
        return self.title

class Comments(models.Model):
    description = models.CharField("Opis", max_length=255)
    author = models.TextField("Autor")
    posted_date = models.DateTimeField('Data dodania', default=timezone.now)
    news = models.ForeignKey(to=News, related_name='member', on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Komentarz"
        verbose_name_plural = "Komentarze"
    
    def __unicode__(self):
        return self.description
    