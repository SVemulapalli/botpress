/**
 * Extract entities that match a slot
 * @hidden true
 * @param slotName The name of the slot to extract. (e.g. destination_from)
 * @param entity The entity of the slot. (e.g. City)
 */
const slotFill = async (slotName, entity) => {
  if (Array.isArray(event.nlu.entities)) {
    for (const e of event.nlu.entities) {
      if (e.name === entity || entity === 'any') {
        if (!session.extractedSlots[slotName]) {
          session.extractedSlots[slotName] = {
            value: e.data.value,
            timestamp: Date.now()
          }

          session.extractedSlots.notFound = 0
        }
      }
    }
  }
}

return slotFill(args.slotName, args.entity)