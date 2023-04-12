def string_splosion(str):
  s = ''
  for i in range(1, len(str) + 1):
    s += str[:i]
  return s