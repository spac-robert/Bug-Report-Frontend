// export class Bug {

//     constructor(private readonly testerName: string,
//         private readonly bugName: string,
//         private readonly description: string,
//         private readonly solved: boolean) {
//     }

//     getTesterName(): string {
//         return this.testerName;
//     }

//     getDescription(): string {
//         return this.description;
//     }

//     isSolved(): boolean {
//         return this.solved;
//     }

//     getBugName(): string{
//         return this.bugName;
//     }
// }

export interface Bug {

    readonly testerName: string,
    readonly bugName: string,
    readonly description: string,
    readonly solved: boolean
}