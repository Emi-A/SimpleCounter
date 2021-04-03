import React from "react";
//poner aqui los props de card <Card props={aux} />
import PropTypes from "prop-types";
//importar card

//create your first component
export function Home(props) {
	return (
		<div className="container mt-5">
			<div className="row p-3 mb-2 bg-secondary text-white">
				<div className="col-1 "></div>
				<div className="col-1">
					<h1>
						<span className="badge bg-secondary border border-light">
							<i className="fas fa-clock"></i>
						</span>
					</h1>
				</div>
				<div className="col-1">
					<h1>
						<span className="badge bg-secondary border border-light">
							{props.dig5 % 10}
						</span>
					</h1>
				</div>
				<div className="col-1">
					<h1>
						<span className="badge bg-secondary border border-light">
							{props.dig4 % 10}
						</span>
					</h1>
				</div>
				<div className="col-1">
					<h1>
						<span className="badge bg-secondary border border-light">
							{props.dig3 % 10}
						</span>
					</h1>
				</div>
				<div className="col-1">
					<h1>
						<span className="badge bg-secondary border border-light">
							{props.dig2 % 10}
						</span>
					</h1>
				</div>
				<div className="col-1">
					<h1>
						<span className="badge bg-secondary border border-light">
							{props.dig1 % 10}
						</span>
					</h1>
				</div>
				<div className="col-1">
					<h1>
						<span className="badge bg-secondary border border-light">
							{props.dig0 % 10}
						</span>
					</h1>
				</div>
			</div>
		</div>
	);
}

Home.propTypes = {
	dig0: PropTypes.number,
	dig1: PropTypes.number,
	dig2: PropTypes.number,
	dig3: PropTypes.number,
	dig4: PropTypes.number,
	dig5: PropTypes.number
};
