type Stage = "init" | "loading" | "ready" | "running" | "complete";

type StageName = `${Stage}-stage`;

const stageName: StageName = "init-stage";

console.log(stageName);