schema: "hotel"

| property | type | value/example | reason | mandatory? |
|---|---|---|---|---|
| schema | string | hotel | the name of the resource | false |
| operaCode | string | ATH-MOO4 |  | false |
| displayName | string | Best Hotel |  | false |
| hotel | string | RESALT |  | false |
| occupancyLimits.adults.minimum | numeric | 1 | Minimum number of adults required in this room | true |
| occupancyLimits.adults.maximum | numeric | 3 | Maximum number of adults allowed in this room | false |
| occupancyLimits.children.maximum | numeric | 3 | Maximum number of children allowed in this room | false |
| occupancyLimits.cots.maximum | numeric | 1 | Maximum number of cots allowed in this room | true |
| occupancyLimits.totalOccupants.maximum | numeric | 1 | Describe how many people fit into this room | true |
| alternateChipsHotelCodes | object |  |  | false |
| roomsThatCannotBeSoldWithThisRoom | array |  |  | false |
| interconnectingRoomsThatCannotBeSoldWithThisRoom | array |  |  | false |
