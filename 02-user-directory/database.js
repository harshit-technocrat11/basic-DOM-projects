const users = [
  {
    id: 1,
    name: "Shah Rukh Khan",
    email: "shahrukh.khan@example.com",
    profileURL:
      "https://imgs.search.brave.com/hJBxMbALNnMH0Nv_TGewA_nDYdzZpGdRVhIpneDHlUg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ0LzI5/LzA4LzQ0MjkwODEw/Yzg1MjEyYjQyY2Mw/Y2MzMTg2M2VmYjJl/LmpwZw",
  },
  {
    id: 2,
    name: "Priyanka Chopra",
    email: "priyanka.chopra@example.com",
    profileURL:
      "https://imgs.search.brave.com/BTV24CChv7INTEeyLy1WGKjPC0N6TSOpyeiHTMjPMFg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wcml5/YW5rYS1jaG9wcmEt/bG9zLWFuZ2VsZXMt/Y2EtYXVndXN0LXdv/cmxkLXByZW1pZXJl/LWhlci1tb3ZpZS1k/aXNuZXktcy1wbGFu/ZXMtZWwtY2FwaXRh/bi10aGVhdHJlLWhv/bGx5d29vZC00NjA2/OTA3My5qcGc",
  },
  {
    id: 3,
    name: "Virat Kohli",
    email: "virat.kohli@example.com",
    profileURL:
      "https://imgs.search.brave.com/lD6rMe4uEU49urHQull7LMvEXrMeoZP_XAOUW5-5pjA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhLzUzZTMz/MzY4ZWUxNWM0OTQw/MDA1ODViODNmYmVl/ZmMxNmU2ZGU0MWUv/MF8xOTdfMzUwMF8y/MTAwL21hc3Rlci8z/NTAwLmpwZz93aWR0/aD00NjUmZHByPTEm/cz1ub25lJmNyb3A9/NTo0",
  },
  {
    id: 4,
    name: "Zendaya",
    email: "zendaya@example.com",
    profileURL:
      "https://imgs.search.brave.com/UEPzDO8aWZPlL5YiDYZq58-vG2c_Kefrw-UYU60weLI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE5NTMzNjM2L3Iv/aWwvMzQ5YTlhLzQw/NTI4MDkzODcvaWxf/MzQweDI3MC40MDUy/ODA5Mzg3XzV5OWQu/anBn",
  },
  {
    id: 5,
    name: "Tom Cruise",
    email: "tom.cruise@example.com",
    profileURL:
      "https://imgs.search.brave.com/Cim21q1R4YLY54nelnMt1uhNZlGhFK6PM4EMOdII94M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90b20t/Y3J1aXNlLTE0MzQ2/MjgyLmpwZw",
  },
  {
    id: 6,
    name: "Deepika Padukone",
    email: "deepika.padukone@example.com",
    profileURL:
      "https://imgs.search.brave.com/DqYWEmES6nL4B5C_vJ6o5jRm6O6jzpsDmF01uQ-IHOw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/NS5ib2xseXdvb2Ro/dW5nYW1hLmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzAz/L0RlZXBpa2EtUGFk/dWtvbmUtMi0xNC0z/MjJ4MjQyLmpwZw",
  },
  {
    id: 7,
    name: "Leonardo DiCaprio",
    email: "leonardo.dicaprio@example.com",
    profileURL:
      "https://imgs.search.brave.com/gZrfkF7fHT_K1Cc3Qcz94H1i8hPzUlIvmgQq68xIf2E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmFuZGFuZ28u/Y29tL0ltYWdlUmVu/ZGVyZXIvODIwLzAv/cmVkZXNpZ24vc3Rh/dGljL2ltZy9kZWZh/dWx0X3Bvc3Rlci5w/bmcvMC9pbWFnZXMv/bWFzdGVycmVwb3Np/dG9yeS9wZXJmb3Jt/ZXIlMjBpbWFnZXMv/MTc5NTU3L3RoZWdy/ZWF0Z2F0c2J5LW12/LTcwLmpwZw",
  },
];
