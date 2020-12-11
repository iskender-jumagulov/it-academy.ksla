import pyowm
import telebot

from pyowm.utils.config import get_default_config
from datetime import datetime

config_dict = get_default_config()
config_dict['language'] = 'ru'

owm = pyowm.OWM('7d47b993f3f42b699e2d3e79aee71cc1')
bot = telebot.TeleBot("1334903334:AAEWUiRjIwk99t255x-z_nxBZPQLXKQ7WKM")
mgr = owm.weather_manager()

@bot.message_handler(commands=['start'])
def start_message(message):
    bot.send_message(message.chat.id, 'Привет, напиши название города, а я покажу тебе погоду в этом городе, и дам совет как лучше одется ')

@bot.message_handler(commands=['news'])
def news(message):
    bot.send_message(message.chat.id, 'https://24.kg/tehnoblog/175033_poyavilos_video_moschneyshey_vspyishki_nasolntse/' )
 #   r = requests.get('https://24.kg/tehnoblog/')
  #  html = BS(r.content, 'html.parser')
 #   distr = html.select('.descr > a')
  # bot.send_message(message.chat.id, distr )

@bot.message_handler(commands=['time'])
def function(message):
    timeAnswer = 'underfined'
    dateh = datetime.now().hour
    dateh = dateh + 6
    if dateh > 23:
        dateh = dateh - 24
    timeAnswer = 'Сейчас ' + str(dateh) + ' часа'

    bot.send_message(message.chat.id, timeAnswer )

@bot.message_handler(content_types=['text'])
def send_echo(message):
    observation = mgr.weather_at_place(message.text)
    w = observation.weather
    temp = w.temperature('celsius')["temp"]

    answer1 = "В городе " + message.text + " сейчас " + w.detailed_status
    answer2 = "Температура сейчас в районе " + str(temp)

    if temp < 10:
        answer3 = "Сейчас ппц как холодно, одевайся как танк!"
    elif temp < 20:
        answer3 = "Сейчас холодно, одевайся потеплее!"
    else:
        answer3 = "Температура норм, одевай что угодно!"

    bot.send_message(message.chat.id, answer1)
    bot.send_message(message.chat.id, answer2)
    bot.send_message(message.chat.id, answer3)



bot.polling( none_stop = True )