import { DisplayValueHeader, Color } from 'pixel_combats/basic';
import { Game, Players, Inventory, LeaderBoard, BuildBlocksSet, Teams, Damage, BreackGraph, 
        Ui, Properties, GameMode, Spawns, Timers, TeamsBalancer, Build, AreaPlayerTriggerService } from 'pixel_combats/room';

Damage.GetContext().DamageOut.Value = true;
Damage.GetContext().FriendlyFire.Value = true;
BreackGraph.OnlyPlayerBlocksDmg = true;

Teams.Add("Blue", "<b>Игроки</b>", new Color(0, 0, 1, 0));
Teams.Add("Red", "<b>Админы</b>", new Color(0, 0, 0, 0));
var admsTeam = Teams.Get("Red");
var playersTeam = Teams.Get("Blue");
Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2);
playersTeam.Build.BlocksSet.Value = BuildBlocksSet.Blue;
admsTeam.Build.BlocksSet.Value = BuildBlocksSet.AllClear;

Teams.Get("Blue").Properties.Get("Deaths").Value = "<b><i><color=red>Покупки</color> от BOSSa!!!</i></b>";
Teams.Get("Red").Properties.Get("Deaths").Value = "<b><i>Создал <color=red>BOSS</color>!!!</i></b>";

LeaderBoard.PlayerLeaderBoardValues = [
  new DisplayValueHeader("Kills", "<b>Киллы</b>", "<b>Киллы</b>"),
  new DisplayValueHeader("Deaths", "<b>Смерти</b>", "<b>Смерти</b>"),
  new DisplayValueHeader("Scores", "<b>Очки</b>", "<b>Очки</b>"),
  new DisplayValueHeader("Статус", "<b>Статус</b>", "<b>Статус</b>")
];

LeaderBoard.PlayersWeightGetter.Set(function(player) {
  return player.Properties.Get("Scores").Value;
});

Ui.GetContext().TeamProp1.Value = { Team: "Blue", Prop: "Deaths" };
Ui.GetContext().TeamProp2.Value = { Team: "Red", Prop: "Deaths" };

Teams.OnRequestJoinTeam.Add(function(player, team){
  if (GameMode.Parameters.GetBool('hello')) { 
    player.Ui.Hint.Value = `Привет ${player.NickName}!`; 
  }
  function getadm(player) {
    player.inventory.Main.Value = true;
    player.inventory.MainInfinity.Value = true;
    player.inventory.Secondary.Value = true;
    player.inventory.SecondaryInfinity.Value = true;
    player.inventory.Melee.Value = true;
    player.inventory.Explosive.Value = true;
    player.inventory.ExplosiveInfinity.Value = true;
    player.inventory.Build.Value = true;
    player.inventory.BuildInfinity.Value = true;
    player.contextedProperties.SkinType.Value = 1;
    player.Build.Pipette.Value = true;
    player.Build.FlyEnable.Value = true;
    player.Build.BalkLenChange.Value = true;
    player.Build.BuildRangeEnable.Value = true;
    player.Build.BuildModeEnable.Value = true;
    player.Build.RemoveQuad.Value = true;
    player.Build.FillQuad.Value = true;
    player.Build.FloodFill.Value = true;
    player.Build.ChangeSpawnsEnable.Value = true;
    player.Build.LoadMapEnable.Value = true;
    player.Build.ChangeMapAuthorsEnable.Value = true;
    player.Build.GenMapEnable.Value = true;
    player.Build.ChangeCameraPointsEnable.Value = true;
    player.Build.CollapseChangeEnable.Value = true;
    player.Build.QuadChangeEnable.Value = true;
    player.Build.SetSkyEnable.Value = true;
    player.Build.BlocksSet.Value = BuildBlocksSet.AllClear;
    player.Damage.DamageIn.Value = false;
  }
  function getvip1(player) {
    player.inventory.Main.Value = true;
    player.inventory.Secondary.Value = true; 
    player.inventory.SecondaryInfinity.Value = true;
    player.inventory.Melee.Value = true; 
    player.contextedProperties.MaxHp.Value = 500;
  }
  function getvip2(player) {
    player.inventory.Main.Value = true;
    player.inventory.MainInfinity.Value = true;
    player.inventory.Secondary.Value = true;
    player.inventory.SecondaryInfinity.Value = true;
    player.inventory.Melee.Value = true;
    player.inventory.Explosive.Value = true;
    player.inventory.ExplosiveInfinity.Value = true;
    player.contextedProperties.MaxHp.Value = 1000;
  }
  function getvip3(player) {
    player.inventory.Main.Value = true;
    player.inventory.MainInfinity.Value = true;
    player.inventory.Secondary.Value = true;
    player.inventory.SecondaryInfinity.Value = true;
    player.inventory.Melee.Value = true;
    player.inventory.Explosive.Value = true;
    player.inventory.ExplosiveInfinity.Value = true;
    player.inventory.Build.Value = true;
    player.Build.FlyEnable.Value = true;
    player.contextedProperties.SkinType.Value = 2;
    player.contextedProperties.MaxHp.Value = 2500;
  }
  if (player.id == "41F16562BF7046EA" || player.id == "78B0B66D795E5120") {
    Teams.Get("Red").Add(player);
  } else {
    Teams.Get("Blue").Add(player);
  }
  if (GameMode.Parameters.GetBool("miniHp")) {
    player.contextedProperties.MaxHp.Value = 50;
  }
  // Для меня
  if (player.id == "41F16562BF7046EA") {
    getadm(player);
  }
  // Для чёрного мечника 
  if (player.id == "78B0B66D795E5120") {
    getadm(player);
  }
  // Для n1ckа (2F1955AAE64508B9)
  // Для ghostа
  if (player.id == "3D58DB48C21B6054") {
    getvip2(player);
  }
  // Для rekiona
  if (player.id == "B0B43E6C2C10E541") {
    getvip1(player);
  }
  // Для mau
  if (player.id == "AAA9FBB8CCA3CD90") {
    getvip2(player);
  }
  // Для отчима
  if (player.id == "8972D9E2F6573D5F") {
    getvip2(player);
  }
  // Для сотрудника
  if (player.id == "CD8BA5F2ABD9BBDA") {
    getvip2(player);
  }
  // Для ssodm
  if (player.id == "2827CD16AE7CC982") {
    getvip3(player);
  }
  // Для fanom
  if (player.id == "12EC16F532498F3F") {
    getvip3(player);
  }
  // Для брата
  if (player.id == "D8BF867D8C4DED16") {
    getvip3(player);
  }
  // Для ГГчеликаГГ
  if (player.id == "40265AFE3B5A0AC2") {
    getvip1(player);
  }
  // Для dragonа
  if (player.id == "C957E4E920E8ACD") {
    getvip2(player);
  }
  // Для Йоши
  if (player.id == "BEE79A6C0D2E96F") {
    getvip1(player);
  }
  if (player.id == "41F16562BF7046EA" || player.id == "78B0B66D795E5120" || player.id == "2F1955AAE64508B9" || player.id == "3D58DB48C21B6054" || player.id == "AAD18F7FB400BD5F" || player.id == "B0B43E6C2C10E541" || player.id == "AAA9FBB8CCA3CD90" || player.id == "8681FCE77AB4939D" || player.id == "40265AFE3B5A0AC2" || player.id == "C957E4E920E8ACD" || player.id == "2827CD16AE7CC982" || player.id == "12EC16F532498F3F") {
  if (player.id == "41F16562BF7046EA") {
    player.Properties.Get("Статус").Value = "<b><color=red>Гл. Админ</color></b>";
  }
  if (player.id == "78B0B66D795E5120") {
    player.Properties.Get("Статус").Value = "<b>><color=red>Админ</color></b>";
  }
  if (player.id == "2F1955AAE64508B9" || player.id == "3D58DB48C21B6054" || player.id == "AAD18F7FB400BD5F" || player.id == "B0B43E6C2C10E541" || player.id == "AAA9FBB8CCA3CD90" || player.id == "8681FCE77AB4939D" || player.id == "40265AFE3B5A0AC2" || player.id == "C957E4E920E8ACD" || player.id == "2827CD16AE7CC982" || player.id == "12EC16F532498F3F") {
    player.Properties.Get("Статус").Value = "<b><color=yellow>VIP</color> Игрок</b>";
  }
  } else {
    player.Properties.Get("Статус").Value = "<b>Игрок</b>";
  }
});

Teams.OnPlayerChangeTeam.Add(function(player){ 
  player.Spawns.Spawn();
});

var immortalityTimerName = "immortality";
Spawns.GetContext().OnSpawn.Add(function(player){
  player.Properties.Immortality.Value = true;
  timer = player.Timers.Get(immortalityTimerName).Restart(5);
});
Timers.OnPlayerTimer.Add(function(timer){
  if (timer.Id != immortalityTimerName) return;
  timer.Player.Properties.Immortality.Value = false;
});

Damage.OnDeath.Add(function(player) {
  ++player.Properties.Deaths.Value;
});

Damage.OnKill.Add(function(player, killed) {
  if (player.id !== killed.id) { 
    ++player.Properties.Kills.Value;
    player.Properties.Scores.Value += 250;
  }
});

var inventory = Inventory.GetContext();
inventory.Main.Value = false;
inventory.Secondary.Value = false;
inventory.Melee.Value = false;
inventory.Explosive.Value = false;
inventory.Build.Value = false;
inventory.BuildInfinity.Value = false;

Spawns.GetContext().RespawnTime.Value = 0;

var MainTrueTrigger = AreaPlayerTriggerService.Get("1+")
MainTrueTrigger.Tags = ["1+"];
MainTrueTrigger.Enable = true;
MainTrueTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.inventory.Main.Value = true;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `Тебе дали первичное оружие`;
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  }
});

var BuyMainTrigger = AreaPlayerTriggerService.Get("1+*")
BuyMainTrigger.Tags = ["1+*"];
BuyMainTrigger.Enable = true;
BuyMainTrigger.OnEnter.Add(function(player){
  player.Ui.Hint.Value = `Первичное оружие стоит 10000 очков а у тебя ${player.Properties.Scores.Value} очков`;
  if (player.Properties.Scores.Value > 9999) {
    player.Ui.Hint.Value = `Ты купил первичное оружие за 10000 очков из своих ${player.Properties.Scores.Value} очков`;
    player.Properties.Scores.Value -= 10000;
    player.inventory.Main.Value = true;
    player.Spawns.Spawn();
  }
});

var MainFalseTrigger = AreaPlayerTriggerService.Get("1-")
MainFalseTrigger.Tags = ["1-"];
MainFalseTrigger.Enable = true;
MainFalseTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.inventory.Main.Value = false;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `У тебя отобрали первичное оружие`;
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  }
});

var MainInfinityTrigger = AreaPlayerTriggerService.Get("1∞")
MainInfinityTrigger.Tags = ["1∞"];
MainInfinityTrigger.Enable = true;
MainInfinityTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.inventory.MainInfinity.Value = true;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `Тебе дали патроны ∞ на первичное оружие`;
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  }
});

var BuyMainInfinityTrigger = AreaPlayerTriggerService.Get("1∞*")
BuyMainInfinityTrigger.Tags = ["1∞*"];
BuyMainInfinityTrigger.Enable = true;
BuyMainInfinityTrigger.OnEnter.Add(function(player){
  player.Ui.Hint.Value = `Патроны ∞ на первичное оружие стоят 5000 очков а у тебя ${player.Properties.Scores.Value} очков`;
  if (player.Properties.Scores.Value > 4999) {
    player.Ui.Hint.Value = `Ты купил патроны ∞ на первичное оружие за 5000 очков из своих ${player.Properties.Scores.Value} очков`;
    player.Properties.Scores.Value -= 5000;
    player.inventory.MainInfinity.Value = true;
    player.Spawns.Spawn();
  }
});

var SecondaryTrueTrigger = AreaPlayerTriggerService.Get("2+")
SecondaryTrueTrigger.Tags = ["2+"];
SecondaryTrueTrigger.Enable = true;
SecondaryTrueTrigger.OnEnter.Add(function(player){
  player.inventory.Secondary.Value = true;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `Тебе дали вторичное оружие`;
});

var BuySecondaryTrigger = AreaPlayerTriggerService.Get("2+*")
BuySecondaryTrigger.Tags = ["2+*"];
BuySecondaryTrigger.Enable = true;
BuySecondaryTrigger.OnEnter.Add(function(player){
  player.Ui.Hint.Value = `Вторичное оружие стоит 1000 очков а у тебя ${player.Properties.Scores.Value} очков`;
  if (player.Properties.Scores.Value > 999) {
    player.Ui.Hint.Value = `Ты купил вторичное оружие за 1000 очков из своих ${player.Properties.Scores.Value} очков`;
    player.Properties.Scores.Value -= 1000;
    player.inventory.Secondary.Value = true;
    player.Spawns.Spawn();
  }
});

var SecondaryFalseTrigger = AreaPlayerTriggerService.Get("2-")
SecondaryFalseTrigger.Tags = ["2-"];
SecondaryFalseTrigger.Enable = true;
SecondaryFalseTrigger.OnEnter.Add(function(player){
  player.inventory.Secondary.Value = false;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `У тебя отобрали вторичное оружие`;
});

var SecondaryInfinityTrigger = AreaPlayerTriggerService.Get("2∞")
SecondaryInfinityTrigger.Tags = ["2∞"];
SecondaryInfinityTrigger.Enable = true;
SecondaryInfinityTrigger.OnEnter.Add(function(player){
  player.inventory.SecondaryInfinity.Value = true;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `Тебе дали ∞ патроны на вторичное оружие`;
});

var BuySecondaryInfinityTrigger = AreaPlayerTriggerService.Get("2∞*")
BuySecondaryInfinityTrigger.Tags = ["2∞*"];
BuySecondaryInfinityTrigger.Enable = true;
BuySecondaryInfinityTrigger.OnEnter.Add(function(player){
  player.Ui.Hint.Value = `Патроны ∞ на вторичное оружие стоят 500 очков а у тебя ${player.Properties.Scores.Value} очков`;
  if (player.Properties.Scores.Value > 499) {
    player.Ui.Hint.Value = `Ты купил патроны ∞ на вторичное оружие за 500 очков из своих ${player.Properties.Scores.Value} очков`;
    player.Properties.Scores.Value -= 500;
    player.inventory.SecondaryInfinity.Value = true;
    player.Spawns.Spawn();
  }
});

var MeleeTrueTrigger = AreaPlayerTriggerService.Get("3+")
MeleeTrueTrigger.Tags = ["3+"];
MeleeTrueTrigger.Enable = true;
MeleeTrueTrigger.OnEnter.Add(function(player){
  player.inventory.Melee.Value = true;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `Тебе дали холодное оружие`;
});

var BuyMeleeTrigger = AreaPlayerTriggerService.Get("3+*")
BuyMeleeTrigger.Tags = ["3+*"];
BuyMeleeTrigger.Enable = true;
BuyMeleeTrigger.OnEnter.Add(function(player){
  player.Ui.Hint.Value = `Холодное оружие стоит 500 очков а у тебя ${player.Properties.Scores.Value} очков`;
  if (player.Properties.Scores.Value > 499) {
    player.Ui.Hint.Value = `Ты купил холодное оружие за 500 очков из своих ${player.Properties.Scores.Value} очков`;
    player.Properties.Scores.Value -= 500;
    player.inventory.Melee.Value = true;
    player.Spawns.Spawn();
  }
});

var MeleeFalseTrigger = AreaPlayerTriggerService.Get("3-")
MeleeFalseTrigger.Tags = ["3-"];
MeleeFalseTrigger.Enable = true;
MeleeFalseTrigger.OnEnter.Add(function(player){
  player.inventory.Melee.Value = false;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `У тебя отобрали холодное оружие`;
});

var ExplosiveTrueTrigger = AreaPlayerTriggerService.Get("4+")
ExplosiveTrueTrigger.Tags = ["4+"];
ExplosiveTrueTrigger.Enable = true;
ExplosiveTrueTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.inventory.Explosive.Value = true;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `Тебе дали взрывчатые снаряды`;
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  }
});

var BuyExplosiveTrigger = AreaPlayerTriggerService.Get("4+*")
BuyExplosiveTrigger.Tags = ["4+*"];
BuyExplosiveTrigger.Enable = true;
BuyExplosiveTrigger.OnEnter.Add(function(player){
  player.Ui.Hint.Value = `Взрывчатые снаряды стоят 100000 очков а у тебя ${player.Properties.Scores.Value} очков`;
  if (player.Properties.Scores.Value > 99999) {
    player.Ui.Hint.Value = `Ты купил взрывчатые снаряды за 100000 очков из своих ${player.Properties.Scores.Value} очков`;
    player.Properties.Scores.Value -= 100000;
    player.inventory.Explosive.Value = true;
    player.Spawns.Spawn();
  }
});

var ExplosiveFalseTrigger = AreaPlayerTriggerService.Get("4-")
ExplosiveFalseTrigger.Tags = ["4-"];
ExplosiveFalseTrigger.Enable = true;
ExplosiveFalseTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.inventory.Explosive.Value = false;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `У тебя отобрали взрывчатые снаряды`;
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  }
});

var ExplosiveInfinityTrigger = AreaPlayerTriggerService.Get("4∞")
ExplosiveInfinityTrigger.Tags = ["4∞"];
ExplosiveInfinityTrigger.Enable = true;
ExplosiveInfinityTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.inventory.ExplosiveInfinity.Value = true;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `Тебе дали взрывчатые снаряды ∞`;
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  }
});

var BuyExplosiveInfinityTrigger = AreaPlayerTriggerService.Get("4∞*")
BuyExplosiveInfinityTrigger.Tags = ["4∞*"];
BuyExplosiveInfinityTrigger.Enable = true;
BuyExplosiveInfinityTrigger.OnEnter.Add(function(player){
  player.Ui.Hint.Value = `Взрывчатые снаряды ∞ стоят 50000 очков а у тебя ${player.Properties.Scores.Value} очков`;
  if (player.Properties.Scores.Value > 49999) {
    player.Ui.Hint.Value = `Ты купил взрывчатые снаряды ∞ за 50000 очков из своих ${player.Properties.Scores.Value} очков`;
    player.Properties.Scores.Value -= 50000;
    player.inventory.ExplosiveInfinity.Value = true;
    player.Spawns.Spawn();
  }
});

var BuyBlocksTrigger = AreaPlayerTriggerService.Get("5+*")
BuyBlocksTrigger.Tags = ["5+*"];
BuyBlocksTrigger.Enable = true;
BuyBlocksTrigger.OnEnter.Add(function(player){
  player.Ui.Hint.Value = `Блоки стоят 200000 очков а у тебя ${player.Properties.Scores.Value} очков`;
  if (player.Properties.Scores.Value > 199999) {
    player.Ui.Hint.Value = `Ты купил блоки за 200000 очков из своих ${player.Properties.Scores.Value} очков`;
    player.Properties.Scores.Value -= 200000;
    player.inventory.Build.Value = true;
    player.Spawns.Spawn();
  }
});

var PrisonSkinTrigger = AreaPlayerTriggerService.Get("Зек")
PrisonSkinTrigger.Tags = ["Зек"];
PrisonSkinTrigger.Enable = true;
PrisonSkinTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.contextedProperties.SkinType.Value = 2;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `Тебе дали скин зека`;
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  }
});

var BuyPrisonSkinTrigger = AreaPlayerTriggerService.Get("Зек*")
BuyPrisonSkinTrigger.Tags = ["Зек*"];
BuyPrisonSkinTrigger.Enable = true;
BuyPrisonSkinTrigger.OnEnter.Add(function(player){
  player.Ui.Hint.Value = `Скин зека стоит 10000 очков а у тебя ${player.Properties.Scores.Value} очков`;
  if (player.Properties.Scores.Value > 9999) {
    player.Ui.Hint.Value = `Ты купил скин зека за 10000 очков из своих ${player.Properties.Scores.Value} очков`;
    player.Properties.Scores.Value -= 10000;
    player.contextedProperties.SkinType.Value = 2;
    player.Spawns.Spawn();
  }
});

var FlyTrigger = AreaPlayerTriggerService.Get("Полёт")
FlyTrigger.Tags = ["Полёт"];
FlyTrigger.Enable = true;
FlyTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.Build.FlyEnable.Value = true;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `Тебе дали полёт`;
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  }
});

var BuyFlyTrigger = AreaPlayerTriggerService.Get("Полёт*")
BuyFlyTrigger.Tags = ["Полёт*"];
BuyFlyTrigger.Enable = true;
BuyFlyTrigger.OnEnter.Add(function(player){
  player.Ui.Hint.Value = `Полёт стоит 1000000 очков а у тебя ${player.Properties.Scores.Value} очков`;
  if (player.Properties.Scores.Value > 999999) {
    player.Ui.Hint.Value = `Ты купил полёт за 1000000 очков из своих ${player.Properties.Scores.Value} очков`;
    player.Properties.Scores.Value -= 1000000;
    player.Build.FlyEnable.Value = true;
    player.Spawns.Spawn();
  }
});

var Plus10MaxHpTrigger = AreaPlayerTriggerService.Get("+10хп")
Plus10MaxHpTrigger.Tags = ["+10хп"];
Plus10MaxHpTrigger.Enable = true;
Plus10MaxHpTrigger.OnEnter.Add(function(player){
  player.contextedProperties.MaxHp.Value += 10;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `Тебе дали +10хп`;
});

var BuyPlus10MaxHpTrigger = AreaPlayerTriggerService.Get("+10хп*")
BuyPlus10MaxHpTrigger.Tags = ["+10хп*"];
BuyPlus10MaxHpTrigger.Enable = true;
BuyPlus10MaxHpTrigger.OnEnter.Add(function(player){
  player.Ui.Hint.Value = `+10хп стоит 500 очков а у тебя ${player.Properties.Scores.Value} очков`;
  if (player.Properties.Scores.Value > 499) {
    player.Ui.Hint.Value = `Ты купил +10хп за 500 очков из своих ${player.Properties.Scores.Value} очков`;
    player.Properties.Scores.Value -= 500;
    player.contextedProperties.MaxHp.Value += 10;
    player.Spawns.Spawn();
  }
});

var Plus100MaxHpTrigger = AreaPlayerTriggerService.Get("+100хп")
Plus100MaxHpTrigger.Tags = ["+100хп"];
Plus100MaxHpTrigger.Enable = true;
Plus100MaxHpTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.contextedProperties.MaxHp.Value += 100;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `Тебе дали +100хп`;
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  }
});

var BuyPlus100MaxHpTrigger = AreaPlayerTriggerService.Get("+100хп*")
BuyPlus100MaxHpTrigger.Tags = ["+100хп*"];
BuyPlus100MaxHpTrigger.Enable = true;
BuyPlus100MaxHpTrigger.OnEnter.Add(function(player){
  player.Ui.Hint.Value = `+100хп стоит 5000 очков а у тебя ${player.Properties.Scores.Value} очков`;
  if (player.Properties.Scores.Value > 4999) {
    player.Ui.Hint.Value = `Ты купил +100хп за 5000 очков из своих ${player.Properties.Scores.Value} очков`;
    player.Properties.Scores.Value -= 5000;
    player.contextedProperties.MaxHp.Value += 100;
    player.Spawns.Spawn();
  }
});

var Plus1000MaxHpTrigger = AreaPlayerTriggerService.Get("+1000хп")
Plus1000MaxHpTrigger.Tags = ["+1000хп"];
Plus1000MaxHpTrigger.Enable = true;
Plus1000MaxHpTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.contextedProperties.MaxHp.Value += 1000;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `Тебе дали +1000хп`;
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  }
});

var BuyPlus1000MaxHpTrigger = AreaPlayerTriggerService.Get("+1000хп*")
BuyPlus1000MaxHpTrigger.Tags = ["+1000хп*"];
BuyPlus1000MaxHpTrigger.Enable = true;
BuyPlus1000MaxHpTrigger.OnEnter.Add(function(player){
  player.Ui.Hint.Value = `+1000хп стоит 50000 очков а у тебя ${player.Properties.Scores.Value} очков`;
  if (player.Properties.Scores.Value > 49999) {
    player.Ui.Hint.Value = `Ты купил +1000хп за 50000 очков из своих ${player.Properties.Scores.Value} очков`;
    player.Properties.Scores.Value -= 50000;
    player.contextedProperties.MaxHp.Value += 1000;
    player.Spawns.Spawn();
  }
});

var DamageInFalseTrigger = AreaPlayerTriggerService.Get("Бессмертие +")
DamageInFalseTrigger.Tags = ["Бессмертие +"];
DamageInFalseTrigger.Enable = true;
DamageInFalseTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.Damage.DamageIn.Value = false;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `Тебе дали бессмертие`;
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  }
});

var DamageInTrueTrigger = AreaPlayerTriggerService.Get("Бессмертие -")
DamageInTrueTrigger.Tags = ["Бессмертие -"];
DamageInTrueTrigger.Enable = true;
DamageInTrueTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.Damage.DamageIn.Value = true;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `У тебя отобрали бессмертие`;
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  }
});

var Plus5ScoresTrigger = AreaPlayerTriggerService.Get("+ 5 очков")
Plus5ScoresTrigger.Tags = ["+ 5 очков"];
Plus5ScoresTrigger.Enable = true;
Plus5ScoresTrigger.OnEnter.Add(function(player){
  player.Properties.Scores.Value += 5;
  player.Ui.Hint.Value = `Ты получил 5 очков теперь у тебя ${player.Properties.Scores.Value} очков`;
});

var Plus10ScoresTrigger = AreaPlayerTriggerService.Get("+ 10 очков")
Plus10ScoresTrigger.Tags = ["+ 10 очков"];
Plus10ScoresTrigger.Enable = true;
Plus10ScoresTrigger.OnEnter.Add(function(player){
  player.Properties.Scores.Value += 10;
  player.Ui.Hint.Value = `Ты получил 10 очков теперь у тебя ${player.Properties.Scores.Value} очков`;
});

var Plus50ScoresTrigger = AreaPlayerTriggerService.Get("+ 20 очков")
Plus50ScoresTrigger.Tags = ["+ 20 очков"];
Plus50ScoresTrigger.Enable = true;
Plus50ScoresTrigger.OnEnter.Add(function(player){
  player.Properties.Scores.Value += 20;
  player.Ui.Hint.Value = `Ты получил 20 очков теперь у тебя ${player.Properties.Scores.Value} очков`;
});

var Plus50ScoresTrigger = AreaPlayerTriggerService.Get("+ 50 очков")
Plus50ScoresTrigger.Tags = ["+ 50 очков"];
Plus50ScoresTrigger.Enable = true;
Plus50ScoresTrigger.OnEnter.Add(function(player){
  player.Properties.Scores.Value += 50;
  player.Ui.Hint.Value = `Ты получил 50 очков теперь у тебя ${player.Properties.Scores.Value} очков`;
});

var Plus100ScoresTrigger = AreaPlayerTriggerService.Get("+ 100 очков")
Plus100ScoresTrigger.Tags = ["+ 100 очков"];
Plus100ScoresTrigger.Enable = true;
Plus100ScoresTrigger.OnEnter.Add(function(player){
  player.Properties.Scores.Value += 100;
  player.Ui.Hint.Value = `Ты получил 100 очков теперь у тебя ${player.Properties.Scores.Value} очков`;
});

var Plus1000ScoresTrigger = AreaPlayerTriggerService.Get("+ 1000 очков")
Plus1000ScoresTrigger.Tags = ["+ 1000 очков"];
Plus1000ScoresTrigger.Enable = true;
Plus1000ScoresTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.Properties.Scores.Value += 1000;
  player.Ui.Hint.Value = `Ты получил 1000 очков теперь у тебя ${player.Properties.Scores.Value} очков`;
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  }
});

var Plus10000ScoresTrigger = AreaPlayerTriggerService.Get("+ 10000 очков")
Plus10000ScoresTrigger.Tags = ["+ 10000 очков"];
Plus10000ScoresTrigger.Enable = true;
Plus10000ScoresTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.Properties.Scores.Value += 10000;
  player.Ui.Hint.Value = `Ты получил 10000 очков теперь у тебя ${player.Properties.Scores.Value} очков`;
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  }
});

var Plus100000ScoresTrigger = AreaPlayerTriggerService.Get("+ 100000 очков")
Plus100000ScoresTrigger.Tags = ["+ 100000 очков"];
Plus100000ScoresTrigger.Enable = true;
Plus100000ScoresTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.Properties.Scores.Value += 100000;
  player.Ui.Hint.Value = `Ты получил 100000 очков теперь у тебя ${player.Properties.Scores.Value} очков`;
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  }
});

var Plus1000000ScoresTrigger = AreaPlayerTriggerService.Get("+ 1000000 очков")
Plus1000000ScoresTrigger.Tags = ["+ 1000000 очков"];
Plus1000000ScoresTrigger.Enable = true;
Plus1000000ScoresTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.Properties.Scores.Value += 1000000;
  player.Ui.Hint.Value = `Ты получил 1000000 очков теперь у тебя ${player.Properties.Scores.Value} очков`;
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  }
});

var AdmTrigger = AreaPlayerTriggerService.Get("Адм")
AdmTrigger.Tags = ["Адм"];
AdmTrigger.Enable = true;
AdmTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  player.inventory.Main.Value = true;
  player.inventory.MainInfinity.Value = true;
  player.inventory.Secondary.Value = true;
  player.inventory.SecondaryInfinity.Value = true;
  player.inventory.Explosive.Value = true;
  player.inventory.ExplosiveInfinity.Value = true;
  player.inventory.Melee.Value = true;
  player.inventory.Build.Value = true;
  player.inventory.BuildInfinity.Value = true;
  player.Build.Pipette.Value = true;
  player.Build.FlyEnable.Value = true;
  player.Build.BuildRangeEnable.Value = true;
  player.Build.BuildModeEnable.Value = true;
  player.Build.BalkLenChange.Value = true;
  player.Build.CollapseChangeEnable.Value = true;
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `Тебе дали админку`;
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  }
});

var SpawnTrigger = AreaPlayerTriggerService.Get("Возврат на спавн")
SpawnTrigger.Tags = ["Возврат на спавн"];
SpawnTrigger.Enable = true;
SpawnTrigger.OnEnter.Add(function(player){
  player.Spawns.Spawn();
  player.Ui.Hint.Value = `Тебя вернули на спавн`;
});

var BanTrigger = AreaPlayerTriggerService.Get("Бан")
BanTrigger.Tags = ["Бан"];
BanTrigger.Enable = true;
BanTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  if (player.id == "41F16562BF7046EA" || player.id == "78B0B66D795E5120") {
    player.Ui.Hint.Value = `Вас заBANить нельзя!`;
  } else {
    player.spawns.enable = false;
    player.spawns.Despawn();
    player.Ui.Hint.Value = `Вы заBANены!`;
  }
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  };
});

var RestartGameTrigger = AreaPlayerTriggerService.Get("Рестарт")
RestartGameTrigger.Tags = ["Рестарт"];
RestartGameTrigger.Enable = true;
RestartGameTrigger.OnEnter.Add(function(player){
  if (enableAdminsZones) {
  Game.RestartGame();
  } else {
    player.Ui.Hint.Value = `Зона отключена`;
  };
});

let enableAdminsZones = false;
var switchAdminsZonesTrigger = AreaPlayerTriggerService.Get("saz")
switchAdminsZonesTrigger.Tags = ["saz"];
switchAdminsZonesTrigger.Enable = true;
switchAdminsZonesTrigger.OnEnter.Add(function(player){
  if (player.id == "41F16562BF7046EA" || player.id == "78B0B66D795E5120") {
    if (enableAdminsZones) enableAdminsZones = false;
    else enableAdminsZones = true;
    player.Ui.Hint.Value = `Вы сменили работоспособность важных зон, сейчас: ${enableAdminsZones}`;
  } else {
    player.Ui.Hint.Value = `Зона для админа`;
  };
});
