
import Banner from "../components/Banner/Banner";

import { ActivityPage } from "../components/ActivityCard/ActivityPage/ActivityPage";

export default function Activities() {
    return (
      <>
        <Banner title="ACTIVIDADES" compact={true} />
        <ActivityPage />
      </>
    )
}
