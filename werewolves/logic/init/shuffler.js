/**
 * Shuffler 模組:只負責隨機分配角色
 */
function shuffleRoles(players, roles) {
  // 將角色陣列隨機打亂
  const shuffled = roles.sort(() => Math.random() - 0.5);
  // 將打亂後角色分配給玩家
  return players.map((player, index) => {
    return { ...player, role: shuffled[index] };
  });
}
console.log("洗牌模組載入成功");
