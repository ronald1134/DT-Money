import { TransactionsContext } from "../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
import { useMemo } from "react";

export function useSummary() {
    const  transactions  = useContextSelector(
        TransactionsContext,
        (context) => {
            return  context.transactions
        }
    );

    console.log(transactions);

    const summary = useMemo(() => { // memoiza o calculo, so recalcula quando transactions mudar
        return transactions.reduce(
            (acc, transaction) => {
                if (transaction.type === 'income') {
                    acc.income += transaction.price;
                    acc.total += transaction.price;
                } else {
                    acc.outcome += transaction.price;
                    acc.total -= transaction.price;
                }
                acc.total = acc.income - acc.outcome;
                return acc;
            },
            {
                income: 0,
                outcome: 0,
                total: 0
            }
        )
    }, [transactions]);

    return summary;
}