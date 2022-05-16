function permutations(string) {
    if (string.length === 1) {
        return [string]
    } else {
        const possibleOutcomes = permutations(string.slice(1))
        let currentPossibleOutcomes = []
        for (let i = 0; i < string.length; i++) {
            for (let possibleOutcome of possibleOutcomes) {
                let tempOutcomes = possibleOutcome.split("");
                tempOutcomes.splice(i, 0, string[0]);
                const possibleOutcomeString = tempOutcomes.join("");
                let match = false;
                // for (let currentPossibleOutcome of currentPossibleOutcomes) {
                //     if (possibleOutcomeString === currentPossibleOutcome) {
                //         match = true;
                //     }
                // }
                if (!match) {
                    currentPossibleOutcomes.push(possibleOutcomeString);
                }
            }
        }
        return currentPossibleOutcomes
    }
  }
  permutations('aabfadsf');