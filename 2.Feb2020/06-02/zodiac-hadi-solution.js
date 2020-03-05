function zodiac(name, day, month, year) {
  const result = {
    userName: name,
    birthDay: day,
    birthMonth: month,
    birthYear: year,
    yourZodiac: function() {
      data = [
        { signName: "Not real day!", from: "0000" },
        { signName: "Capricorn", from: "0101" },
        { signName: "Aquarius", from: "0121" },
        { signName: "Pisces", from: "0220" },
        { signName: "Aries", from: "0321" },
        { signName: "Taurus", from: "0421" },
        { signName: "Gemini", from: "0521" },
        { signName: "Cancer", from: "0622" },
        { signName: "Leo", from: "0723" },
        { signName: "Virgo", from: "0824" },
        { signName: "Libra", from: "0924" },
        { signName: "Scorpio", from: "1024" },
        { signName: "Sagittarius", from: "1123" },
        { signName: "Capricorn", from: "1222" },
        { signName: "Not real day!", from: "1232" },
        { signName: "empty", from: "0000" }
      ];
      let monthDay = this.birthMonth + this.birthDay;
      console.log(monthDay);
      let i = 0;
      while (monthDay >= data[i].from && i < data.length - 1) {
        i++;
      }
      let yourZodiacName = data[i - 1].signName;
      return `Hey ${this.userName} your zodiac sign is ${yourZodiacName}`;
    }
  };
  return result.yourZodiac();
}
console.log(zodiac("Hadi", "01", "09", "1989"));
