from rest_framework.decorators import api_view
from rest_framework.response import Response
import random
from datetime import datetime, timedelta

@api_view(['GET'])
def best_wake_time(request):
    sleep_data = []
    start_time = datetime.now() - timedelta(hours=8)
    for i in range(0, 480, 5):
        sleep_data.append({
            "minute": i,
            "heart_rate": random.randint(50,90),
            "motion": random.random(),
            "stage": "light" if random.random() > 0.7 else "deep"
        })
    wake_window = sleep_data[-6:]
    for d in wake_window:
        if d["stage"] == "light" and d["motion"] > 0.4:
            best_wake = start_time + timedelta(minutes=d["minute"])
            return Response({"best_wake_time": best_wake.strftime("%H:%M")})
    best_wake = start_time + timedelta(minutes=sleep_data[-1]["minute"])
    return Response({"best_wake_time": best_wake.strftime("%H:%M")})
