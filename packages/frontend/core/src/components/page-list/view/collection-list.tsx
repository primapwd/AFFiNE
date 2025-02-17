import { Button, FlexWrapper, Menu } from '@affine/component';
import type { Collection, Filter, PropertiesMeta } from '@affine/env/filter';
import { useI18n } from '@affine/i18n';
import { FilterIcon } from '@blocksuite/icons/rc';

import { CreateFilterMenu } from '../filter/vars';
import * as styles from './collection-list.css';
import { CollectionOperations } from './collection-operations';
import type { AllPageListConfig } from './edit-collection/edit-collection';

export const CollectionPageListOperationsMenu = ({
  collection,
  allPageListConfig,
}: {
  collection: Collection;
  allPageListConfig: AllPageListConfig;
}) => {
  const t = useI18n();
  return (
    <FlexWrapper alignItems="center">
      <CollectionOperations collection={collection} config={allPageListConfig}>
        <Button
          className={styles.filterMenuTrigger}
          type="default"
          icon={<FilterIcon />}
          data-testid="create-first-filter"
        >
          {t['com.affine.filter']()}
        </Button>
      </CollectionOperations>
    </FlexWrapper>
  );
};

export const AllPageListOperationsMenu = ({
  propertiesMeta,
  filterList,
  onChangeFilterList,
}: {
  propertiesMeta: PropertiesMeta;
  filterList: Filter[];
  onChangeFilterList: (filterList: Filter[]) => void;
}) => {
  const t = useI18n();

  return (
    <FlexWrapper alignItems="center">
      <Menu
        items={
          <CreateFilterMenu
            propertiesMeta={propertiesMeta}
            value={filterList}
            onChange={onChangeFilterList}
          />
        }
      >
        <Button
          className={styles.filterMenuTrigger}
          type="default"
          icon={<FilterIcon />}
          data-testid="create-first-filter"
        >
          {t['com.affine.filter']()}
        </Button>
      </Menu>
    </FlexWrapper>
  );
};
