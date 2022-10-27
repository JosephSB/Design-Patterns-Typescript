export interface Enemy {
    spawn() : string
    status(): string
    atack(): number
    takeDamage(DamageReceived: number): string
}
