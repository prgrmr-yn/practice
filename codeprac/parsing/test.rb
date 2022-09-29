webhook_discord_negs = 'https://discord.com/api/webhooks/1021205911844429924/ZIDoxA23G-RCjbzZrmBu6iClWfPuWtw2xDLpp7Q96iBRJ7tuwZ9ARn6tv-mdpS7V7HN7'


print `curl -H "Content-Type: application/json" -X POST -d '{
  "content": null,
  "embeds": [
    {
      "description": "Trip Selector: Botanic gardens with lunch",
      "color": 1394139
    }
  ],
  "attachments": []
}' #{webhook_discord_negs}`
