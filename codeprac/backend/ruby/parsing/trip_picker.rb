webhook_discord_yengela = 'https://discord.com/api/webhooks/1023466040287567913/Mnv30PR9v0wjCnRIGSbXqVSmTcXrb_LsG8pUGMwcRNR8ZjcuxQnHvTta7AArS1qwRqPu'
trip = 'Dromana drive ins'

print `curl -H "Content-Type: application/json" -X POST -d '{
  "content": null,
  "embeds": [
    {
      "description": "Trip Selector: #{trip}",
      "color": 1394139
    }
  ],
  "attachments": []
}' #{webhook_discord_yengela}`
