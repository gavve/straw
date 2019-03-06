import requests

url = "https://api-sandbox.coingate.com/v2/orders"

querystring = {"price_amount":"10","price_currency":"EUR","receive_currency":"BTC","order_id":"wasteless1000"}

payload = ""
headers = {
    'Authorization': "Bearer n9-vxqNsfAusDEExEum_Y4VhA4rWK9VqhXkjez3S",
    'cache-control': "no-cache",
    }

response = requests.request("POST", url, data=payload, headers=headers, params=querystring)

print(response.text)