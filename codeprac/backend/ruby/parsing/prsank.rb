20.times do |i|
print `curl -H "Content-Type: application/json" -X POST -d '{"content":"f u but la u #{i} times"}' https://discord.com/api/webhooks/1025654875419332628/RRhtC5a1xtmQzK4_q3ZM8dixBRaN32oS8nHWFqoWu35M9NCOjzqW8t-RgJBwclM6k0LH`
end
