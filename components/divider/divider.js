import { CgScrollV } from 'react-icons/cg';
import dividerStyles from '../../styles/Divider.module.scss';

function divider() {
	return (
		<div className={dividerStyles.divider} id='about'>
			<div className={dividerStyles.circle}>
				<CgScrollV className={dividerStyles.icon} />
			</div>
		</div>
	);
}

export default divider;
