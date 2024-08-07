# Generated by Django 5.0.6 on 2024-06-14 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(blank=True, max_length=75)),
                ('description', models.TextField()),
                ('length', models.CharField(choices=[('SHORT', 'short'), ('MEDIUM', 'medium'), ('LONG', 'long')], default='medium')),
            ],
            options={
                'ordering': ['created'],
            },
        ),
    ]
