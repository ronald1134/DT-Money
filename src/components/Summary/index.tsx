import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

import { priceFormatter } from "../../utils/Formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
    const summary = useSummary();

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>

                <strong> {priceFormatter.format(summary.income)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>saídas</span>
                    <ArrowCircleDown size={32} color="#ef4444" />
                </header>

                <strong> {priceFormatter.format(summary.outcome)} </strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>

                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}