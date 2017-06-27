from datetime import datetime
import time, math
def add_gigasecond(date):
    print
    print date
    print datetime.fromtimestamp(int(date.strftime("%s")) + math.pow(10, 9))
    print
    return datetime.fromtimestamp(int(date.strftime("%s")) + math.pow(10, 9))
